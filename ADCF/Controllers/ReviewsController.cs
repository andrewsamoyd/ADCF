using System.Collections.Generic;
using System.Threading.Tasks;
using ADCF.Helpers;
using ADCF.Models.ViewModels;
using ADCF.Services;
using Microsoft.AspNetCore.Mvc;

namespace ADCF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IStorageService storageService;

        public ReviewsController(IStorageService storageService)
        {
            this.storageService = storageService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ReviewModel>>> GetReviews()
        {
            var result  = await storageService.GetAll();
            return result;
        }

        [HttpPost]
        public async Task<ActionResult<ReviewModel>> AddReview(ReviewModel model)
        {
            var result = await storageService.Add(model.ToEntity());
            return result;
        }
    }
}