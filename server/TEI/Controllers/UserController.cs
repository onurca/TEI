using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TEI.Model.Authentication;
using TEI.Service.Interfaces;

namespace TEI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]User userParam)
        {
            var user = _userService.AuthenticateAsync(userParam.Username, userParam.Password);

            if (user == null)
                return BadRequest(new { Message = "Username or password is incorrect" });

            return Ok(user);
        }
    }
}