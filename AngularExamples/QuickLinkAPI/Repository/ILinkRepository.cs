using QuickLinkAPI.Models;
using System.Collections.Generic;

namespace QuickLinkAPI.Repository
{
    public interface ILinkRepository
    {
        bool AddLink(LinksModel links);
        bool DeleteLink(string linktext);
        IEnumerable<LinksModel> GetallLinks();
        bool UpdateLink(LinksModel links);
    }
}