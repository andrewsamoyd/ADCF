namespace ADCF.Models.ViewModels
{
    public class ReviewModel
    {
        public string FullName { get; set; }
        public string ReviewText { get; set; }
        public long StartTimeStamp { get; set; }
        public long EndTimeStamp { get; set; }
        public long CreatedTimeStamp { get; set; }
        public int СleanlinessRating { get; set; }
        public int ComfortRating { get; set; }
        public int LocationRating { get; set; }
        public int QualityRating { get; set; }
        public int ServicesRating { get; set; }
        public int StaffRating { get; set; }
    }
}
