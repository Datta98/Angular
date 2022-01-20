using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLinkAPI.Models
{
    public class LinksContext: DbContext
    {
        public LinksContext(DbContextOptions<LinksContext> options) : base(options)
        {

        }
        public DbSet<LinksModel> QuickLinks { get; set; }
    }
}
