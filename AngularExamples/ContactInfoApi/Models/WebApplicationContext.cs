using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class WebApplicationContext:DbContext
{
    public WebApplicationContext(DbContextOptions<WebApplicationContext> options) : base(options)
    {

    }
    public DbSet<ContactInfoModel> ContactInfo { get; set; }
}
