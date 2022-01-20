using System;
using System.Collections.Generic;

public interface IContactInfoRepository
{


    public IEnumerable<ContactInfoModel> GetallInfo();
    bool AddInfo(ContactInfoModel info);
    bool DeleteInfo(string email);
    bool UpdateInfo(ContactInfoModel info);
}
