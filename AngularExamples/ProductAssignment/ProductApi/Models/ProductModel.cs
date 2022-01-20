using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApi.Models
{
    public class ProductModel
    {
        public string catergory { get; set; }
        public string price { get; set; }
        public string stocked { get; set; }
        [Key]
        public  string name { get; set; }

    }
}
