using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Models
{
    public class ProductDbContext:DbContext
    {
        
            public DbSet<ProductModel>Product
            {
                get; set;
            }
            public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options)
            {

            }

        }


    }

