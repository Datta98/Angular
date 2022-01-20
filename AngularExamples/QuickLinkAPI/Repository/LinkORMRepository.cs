using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuickLinkAPI.Models;

namespace QuickLinkAPI.Repository
{
    public class LinkORMRepository : ILinkRepository
    {
        private readonly LinksContext linksContext;
        public LinkORMRepository(LinksContext linksContext)
        {
            this.linksContext = linksContext;
        }

        public bool AddLink(LinksModel links)
        {
            bool status;
            try
            {
                linksContext.QuickLinks.Add(links);
                linksContext.SaveChanges();
                status = true;
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        public bool DeleteLink(string linktext)
        {
            bool status;
            try
            {
                LinksModel linksModel = linksContext.QuickLinks.Find(linktext);
                if (linksModel != null)
                {
                    linksContext.QuickLinks.Remove(linksModel);
                    linksContext.SaveChanges();
                }
                status = true;
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        public IEnumerable<LinksModel> GetallLinks()
        {
            return linksContext.QuickLinks;
        }

        public bool UpdateLink(LinksModel links)
        {
            bool status;
            try
            {
                var _quickLinks = linksContext.QuickLinks.Attach(links);
                _quickLinks.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                linksContext.SaveChanges();
                status = true;
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
    }
}
