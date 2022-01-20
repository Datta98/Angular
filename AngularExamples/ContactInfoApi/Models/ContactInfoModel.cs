using System;
using System.ComponentModel.DataAnnotations;

public class ContactInfoModel
{
	public string Content { get; set; }
	public string Address{ get; set; }
	public string Phone { get; set; }
	[Key]
	public string Email { get; set; }
}
