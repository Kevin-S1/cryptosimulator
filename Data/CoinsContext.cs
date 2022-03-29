#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CryptoSimulator.Models;

namespace CryptoSimulator.Data
{
    public class CoinsContext : DbContext
    {
        public CoinsContext (DbContextOptions<CoinsContext> options)
            : base(options)
        {
        }

        public DbSet<CryptoSimulator.Models.Asset> Assets { get; set; }
    }
}
