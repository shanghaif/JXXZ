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
    
    public partial class zfdx_outstocks
    {
        public int outstockid { get; set; }
        public string outtype { get; set; }
        public Nullable<int> deviceid { get; set; }
        public string process { get; set; }
        public Nullable<int> number { get; set; }
        public Nullable<double> price { get; set; }
        public string applyuser { get; set; }
        public string receiveunit { get; set; }
        public Nullable<int> unit { get; set; }
        public string shuser { get; set; }
        public string remark { get; set; }
        public Nullable<int> createuserid { get; set; }
        public Nullable<System.DateTime> createtime { get; set; }
    }
}
