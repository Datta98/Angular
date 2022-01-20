using System;
using System.Collections.Generic;

public class ContactInfoRepository : IContactInfoRepository
{
    private readonly WebApplicationContext webApplicationContext;
    public ContactInfoRepository(WebApplicationContext _webApplicationContext)
    {
        webApplicationContext = _webApplicationContext;
    }

    public bool AddInfo(ContactInfoModel info)
    {
        bool status;
        try
        {
            webApplicationContext.ContactInfo.Add(info);
            webApplicationContext.SaveChanges();
            status = true;
        }
        catch (Exception)
        {
            status = false;
        }
        return status;
    }

    public bool DeleteInfo(string email)
    {
        bool status;
        try
        {
             ContactInfoModel contact = webApplicationContext.ContactInfo.Find(email);
            if (contact != null)
            {
                webApplicationContext.ContactInfo.Remove(contact);
                webApplicationContext.SaveChanges();
            }
            status = true;
        }
        catch (Exception)
        {
            status = false;
        }
        return status;
    }

    public IEnumerable<ContactInfoModel> GetallInfo()
    {
        return webApplicationContext.ContactInfo;
    }

    public bool UpdateInfo(ContactInfoModel info)
    {
        bool status;
        try
        {
            var _contactInfo = webApplicationContext.ContactInfo.Attach(info);
            _contactInfo.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            webApplicationContext.SaveChanges();
            status = true;
        }
        catch (Exception)
        {
            status = false;
        }
        return status;
    }
}
