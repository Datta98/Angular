using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuickLinkAPI.Models
{
    public class LinksModel
    {
        [Key]
        public string LinkText { get; set; }
        public string Href {get;set;}
    }
}
