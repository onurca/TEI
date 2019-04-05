using System.Collections.Generic;
using TEI.Model.Authentication;

namespace TEI.Service.Interfaces
{
    public interface IUserService
    {
        User AuthenticateAsync(string username, string password);
        IEnumerable<User> GetAll();
    }
}
