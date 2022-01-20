using Microsoft.AspNetCore.Mvc;
using QuickLinkAPI.Repository;
using QuickLinkAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace QuickLinkAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccoutsController: ControllerBase
    {
        private readonly ILinkRepository linkRepository;

        public AccoutsController(ILinkRepository linkRepository)
        {
            this.linkRepository = linkRepository;
        }

        public string Validate(bool isValid)
        {
            if (isValid)
            {
                return "Sucessfully ";
            }
            else
            {
                return " Failed";
            }
        }

        [HttpPost]
        public string AddUser([FromBody] LinksModel _links)
        {
            bool isSucess = linkRepository.AddLink(_links);
            string msg = Validate(isSucess);
            return "Added " + msg;
        }

        [HttpPut]
        public string UpdateUser([FromBody] LinksModel _links)
        {
            bool isupdate = linkRepository.UpdateLink(_links);
            string msg = Validate(isupdate);
            return "Updated " + msg;
        }

        [HttpDelete]
        public string DeleteUser(string linktext)
        {
            bool isdeleted = linkRepository.DeleteLink(linktext);
            string msg = Validate(isdeleted);
            return "Deleted " + msg;
        }


        [HttpGet]
        public IEnumerable<LinksModel> GetAllLink()
        {
            IEnumerable<LinksModel> links  = linkRepository.GetallLinks();
            return links;
        }
    }
}