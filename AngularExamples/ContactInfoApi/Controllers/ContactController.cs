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

        public string Validate(bool isValid)        {            if (isValid)            {                return "Sucessfully ";            }            else            {                return " Failed";            }        }        [HttpPost]        public string AddUser([FromBody] ContactInfoModel _info)        {            bool isSucess = contactInfoRepository.AddInfo(_info);            string msg = Validate(isSucess);            return "Added " + msg;        }        [HttpPut]        public string UpdateUser([FromBody] ContactInfoModel _info)        {            bool isupdate = contactInfoRepository.UpdateInfo(_info);            string msg = Validate(isupdate);            return "Updated " + msg;        }        [HttpDelete]        public string DeleteUser(string email)        {            bool isdeleted = contactInfoRepository.DeleteInfo(email);            string msg = Validate(isdeleted);            return "Deleted " + msg;        }
    }
}