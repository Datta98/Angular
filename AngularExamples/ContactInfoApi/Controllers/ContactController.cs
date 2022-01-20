using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


namespace ContactInfoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController:ControllerBase
    {
        private readonly IContactInfoRepository contactInfoRepository;
        public ContactController(IContactInfoRepository _contactInfoRepository)
        {
            contactInfoRepository = _contactInfoRepository;
        }
        [HttpGet]
        public IEnumerable<ContactInfoModel> GetallInfo()
        {
            IEnumerable<ContactInfoModel> contactInfoModels = contactInfoRepository.GetallInfo();
            return contactInfoModels;
        }

        public string Validate(bool isValid)
    }
}