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
    
    public partial class qw_patrolareas
    {
        public qw_patrolareas()
        {
            this.qw_cartasks = new HashSet<qw_cartasks>();
            this.qw_usertasks = new HashSet<qw_usertasks>();
        }
    
        public int patrolid { get; set; }
        public int sszd { get; set; }
        public Nullable<int> ssbc { get; set; }
        public string name { get; set; }
        public int areatype { get; set; }
        public string explain { get; set; }
        public string grometry { get; set; }
        public Nullable<System.DateTime> createtime { get; set; }
        public Nullable<int> createuserid { get; set; }
        public Nullable<int> isnot { get; set; }
    
        public virtual ICollection<qw_cartasks> qw_cartasks { get; set; }
        public virtual ICollection<qw_usertasks> qw_usertasks { get; set; }
    }
}
