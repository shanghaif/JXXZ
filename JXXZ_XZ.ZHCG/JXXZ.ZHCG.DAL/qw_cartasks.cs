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
    
    public partial class qw_cartasks
    {
        public int cartaskid { get; set; }
        public Nullable<int> patrolid { get; set; }
        public int sszd { get; set; }
        public Nullable<int> ssbc { get; set; }
        public Nullable<int> carid { get; set; }
        public string carnum { get; set; }
        public System.DateTime taskstarttime { get; set; }
        public System.DateTime taskendtime { get; set; }
        public string taskexplain { get; set; }
        public System.DateTime createtime { get; set; }
        public int createuserid { get; set; }
        public int isdelete { get; set; }
    
        public virtual qw_patrolareas qw_patrolareas { get; set; }
    }
}
