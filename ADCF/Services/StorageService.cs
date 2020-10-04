using ADCF.Helpers;
using ADCF.Models;
using ADCF.Models.ViewModels;
using Microsoft.Azure.Cosmos.Table;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ADCF.Services
{
    public class StorageService : IStorageService
    {
        private readonly CloudStorageAccount storageAccount;

        public StorageService(IConfiguration configuration)
        {
            string storageConnectionString = configuration.GetValue<string>("StorageConnectionString");
            storageAccount = CloudStorageAccount.Parse(storageConnectionString);
        }

        public async Task<CloudTable> CreateTableAsync(string tableName)
        {
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
            CloudTable table = tableClient.GetTableReference(tableName);
            try
            {
                await table.CreateIfNotExistsAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return table;
        }

        public async Task<ReviewModel> Add(ReviewEntity model)
        {
            try
            {
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
                CloudTable table = tableClient.GetTableReference("Reviews");

                TableOperation insertOrMergeOperation = TableOperation.InsertOrMerge(model);

                TableResult result = await table.ExecuteAsync(insertOrMergeOperation);
                ReviewEntity inserted = result.Result as ReviewEntity;
                return inserted.ToViewModel();
            }
            catch (StorageException e)
            {
                throw e;
            }
        }

        public async Task<List<ReviewModel>> GetAll()
        {
            try
            {
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
                CloudTable table = tableClient.GetTableReference("Reviews");

                TableContinuationToken token = null;
                var result = new List<ReviewEntity>();
                do
                {
                    var queryResult = await table.ExecuteQuerySegmentedAsync(new TableQuery<ReviewEntity>(), token);
                    result.AddRange(queryResult.Results);
                    token = queryResult.ContinuationToken;
                } while (token != null);

                return result.Select(m => m.ToViewModel()).ToList();
            }
            catch (StorageException e)
            {
                throw e;
            }
        }
    }
}
