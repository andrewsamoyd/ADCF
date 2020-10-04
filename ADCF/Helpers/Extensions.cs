using ADCF.Models;
using ADCF.Models.ViewModels;

namespace ADCF.Helpers
{
    public static class Extensions
    {
        public static ReviewEntity ToEntity(this ReviewModel model)
        {
            var entity = new ReviewEntity(model.FullName)
            {
                ReviewText = model.ReviewText,
                StartTimeStamp = model.StartTimeStamp,
                EndTimeStamp = model.EndTimeStamp,
                СleanlinessRating = model.СleanlinessRating,
                ComfortRating = model.ComfortRating,
                LocationRating = model.LocationRating,
                QualityRating = model.QualityRating,
                ServicesRating = model.ServicesRating,
                StaffRating = model.StaffRating,
            };

            return entity;
        }

        public static ReviewModel ToViewModel(this ReviewEntity entity)
        {
            var model = new ReviewModel()
            {
                FullName = entity.RowKey,
                CreatedTimeStamp = entity.Timestamp.ToUnixTimeSeconds(),
                ReviewText = entity.ReviewText,
                StartTimeStamp = entity.StartTimeStamp,
                EndTimeStamp = entity.EndTimeStamp,
                СleanlinessRating = entity.СleanlinessRating,
                ComfortRating = entity.ComfortRating,
                LocationRating = entity.LocationRating,
                QualityRating = entity.QualityRating,
                ServicesRating = entity.ServicesRating,
                StaffRating = entity.StaffRating,
            };

            return model;
        }
    }
}
