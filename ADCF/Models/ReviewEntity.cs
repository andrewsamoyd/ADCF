using Microsoft.Azure.Cosmos.Table;
using System;

namespace ADCF.Models
{
    public class ReviewEntity : TableEntity
    {
        public ReviewEntity()
        {
        }

        public ReviewEntity(string fullName)
        {
            PartitionKey = Guid.NewGuid().ToString();
            RowKey = fullName;
        }

        public string ReviewText { get; set; }
        public long StartTimeStamp { get; set; }
        public long EndTimeStamp { get; set; }
        public int СleanlinessRating { get; set; }
        public int ComfortRating { get; set; }
        public int LocationRating { get; set; }
        public int QualityRating { get; set; }
        public int ServicesRating { get; set; }
        public int StaffRating { get; set; }
    }
}
