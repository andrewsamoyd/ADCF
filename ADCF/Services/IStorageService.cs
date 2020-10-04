using ADCF.Models;
using ADCF.Models.ViewModels;
using Microsoft.Azure.Cosmos.Table;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ADCF.Services
{
    public interface IStorageService
    {
        Task<CloudTable> CreateTableAsync(string tableName);
        Task<ReviewModel> Add(ReviewEntity model);
        Task<List<ReviewModel>> GetAll();

    }
}
