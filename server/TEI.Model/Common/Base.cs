﻿using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TEI.Model
{
    public interface IBase
    {
        Guid ID { get; set; }
    }
    public class Base : IBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid ID { get; set; } = Guid.Empty;

        [NotMapped]
        public bool IsNew { get { return ID == Guid.Empty; } }
    }
}
