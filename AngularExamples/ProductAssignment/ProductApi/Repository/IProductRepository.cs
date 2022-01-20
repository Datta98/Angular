using ProductApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Repository
{
   public interface IProductRepository
    {
        IEnumerable<ProductModel> Getalldetails();
    }
}
