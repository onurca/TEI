using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using TEI.Model.Business;
using TEI.Service.Interfaces;

namespace TEI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ContentDetailController : ControllerBase
    {
        private readonly IContentDetailService _contentDetailService;

        public ContentDetailController(IContentDetailService contentDetailService)
        {
            _contentDetailService = contentDetailService;
        }

        [HttpGet]
        public IActionResult Get(Guid contentId)
        {
            var contents = _contentDetailService.GetAll(contentId);
            return Ok(contents);
        }

        [HttpPost]
        public IActionResult Post([FromBody] ContentDetail value)
        {
            var content = _contentDetailService.Create(value);
            return Ok(content);
        }
       
        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            _contentDetailService.Delete(id);
            return Ok();
        }
    }
}
