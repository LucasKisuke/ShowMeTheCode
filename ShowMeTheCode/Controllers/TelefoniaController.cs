using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ShowMeTheCode.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TelefoniaController : ControllerBase
    {
        private readonly ILogger<TelefoniaController> _logger;

        public TelefoniaController(ILogger<TelefoniaController> logger)
        {
            _logger = logger;
        }

        // GET: TelefoniaController
        [HttpGet]
        public telefonia Get()
        {
            var telefonia = new telefonia() { plano = "primeiro plano" };
            return telefonia;
        }
    }
}
