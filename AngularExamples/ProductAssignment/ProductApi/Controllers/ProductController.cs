using Microsoft.AspNetCore.Mvc;
using ProductApi.Models;
using ProductApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController:ControllerBase
    {
        private readonly IProductRepository _productRepository  = null;

        public ProductController(IProductRepository userproduct)
        {
            _productRepository = userproduct;

        }

        [HttpGet]

        public IEnumerable<ProductModel> GetAllLinks()
        {
            IEnumerable<ProductModel> _userproduct = _productRepository.Getalldetails();

            return _userproduct;

        }

        [Route("ProductByName/{Name}")]
        public ProductModel GetUserByName(string name)
        {
            return _productRepository.Getalldetails().Where(user => user.name == name).FirstOrDefault();
        }

    }
}
