//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace JXXZ.ZHCG.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class doc_definitions
    {
        public doc_definitions()
        {
            this.doc_wfdddrs = new HashSet<doc_wfdddrs>();
            this.doc_wfsas = new HashSet<doc_wfsas>();
        }
    
        public int ddid { get; set; }
        public string ddname { get; set; }
        public Nullable<int> isunique { get; set; }
        public Nullable<int> ddstate { get; set; }
        public string ddpath { get; set; }
        public Nullable<System.DateTime> createtime { get; set; }
        public Nullable<int> createuserid { get; set; }
        public Nullable<int> seq { get; set; }
        public string doccode { get; set; }
    
        public virtual ICollection<doc_wfdddrs> doc_wfdddrs { get; set; }
        public virtual ICollection<doc_wfsas> doc_wfsas { get; set; }
    }
}
