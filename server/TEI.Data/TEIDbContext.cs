using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System.IO;
using TEI.Model.Authentication;
using TEI.Model.Business;

namespace TEI.Data
{
    public class TEIDbContext : DbContext
    {
        public TEIDbContext(DbContextOptions<TEIDbContext> options) : base(options) { }

        public DbSet<Content> Contents { get; set; }
        public DbSet<ContentDetail> ContentDetails { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) => base.OnModelCreating(modelBuilder);
    }

    public class ApplicationContextDbFactory : IDesignTimeDbContextFactory<TEIDbContext>
    {
        TEIDbContext IDesignTimeDbContextFactory<TEIDbContext>.CreateDbContext(string[] args)
        {
            var ob = new DbContextOptionsBuilder<TEIDbContext>();
            ob.UseSqlServer(ConnectionString);
            return new TEIDbContext(ob.Options);
        }

        private string ConnectionString
        {
            get
            {
                var currentPath = Directory.GetCurrentDirectory();
                return @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=" + currentPath + @"\DATABASE\TEIDB.MDF;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;";
            }
        }
    }
}

