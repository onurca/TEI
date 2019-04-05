﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TEI.Data;

namespace TEI.Data.Migrations
{
    [DbContext(typeof(TEIDbContext))]
    partial class TEIDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TEI.Model.Authentication.User", b =>
                {
                    b.Property<Guid>("ID");

                    b.Property<Guid>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("FirstName");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("LastName");

                    b.Property<string>("Password");

                    b.Property<string>("Token");

                    b.Property<Guid>("UpdatedBy");

                    b.Property<DateTime>("UpdatedDate");

                    b.Property<string>("Username");

                    b.HasKey("ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TEI.Model.Business.Content", b =>
                {
                    b.Property<Guid>("ID");

                    b.Property<Guid>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<Guid>("UpdatedBy");

                    b.Property<DateTime>("UpdatedDate");

                    b.Property<Guid>("Version");

                    b.HasKey("ID");

                    b.ToTable("Contents");
                });

            modelBuilder.Entity("TEI.Model.Business.ContentDetail", b =>
                {
                    b.Property<Guid>("ID");

                    b.Property<string>("Body")
                        .HasMaxLength(10000);

                    b.Property<Guid>("ContentID");

                    b.Property<Guid>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<Guid>("UpdatedBy");

                    b.Property<DateTime>("UpdatedDate");

                    b.Property<Guid>("Version");

                    b.HasKey("ID");

                    b.ToTable("ContentDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
