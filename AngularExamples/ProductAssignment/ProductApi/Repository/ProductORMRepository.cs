using ProductApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Repository
{
    public class ProductORMRepository : IProductRepository
    {


        ProductDbContext context;

            public ProductORMRepository(ProductDbContext _context)
            {
                context = _context;
            }


            public IEnumerable<ProductModel> Getalldetails()
        {
            return context.Product;
        }
    }
}
