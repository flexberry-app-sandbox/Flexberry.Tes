﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tes
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Продажа.
    /// </summary>
    // *** Start programmer edit section *** (Продажа CustomAttributes)

    // *** End programmer edit section *** (Продажа CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПродажаE", new string[] {
            "Дата as \'Дата\'",
            "Сумма as \'Сумма\'",
            "Коммент as \'Коммент\'",
            "Клиент as \'Клиент\'",
            "Клиент.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Клиент.ФИО"})]
    [MasterViewDefineAttribute("ПродажаE", "Клиент", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ПродажаL", new string[] {
            "Дата as \'Дата\'",
            "Сумма as \'Сумма\'",
            "Коммент as \'Коммент\'",
            "Клиент.ФИО as \'ФИО\'"})]
    public class Продажа : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fСумма;
        
        private string fКоммент;
        
        private IIS.Tes.Клиент fКлиент;
        
        // *** Start programmer edit section *** (Продажа CustomMembers)

        // *** End programmer edit section *** (Продажа CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Продажа.Дата CustomAttributes)

        // *** End programmer edit section *** (Продажа.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Продажа.Дата Get start)

                // *** End programmer edit section *** (Продажа.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Продажа.Дата Get end)

                // *** End programmer edit section *** (Продажа.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продажа.Дата Set start)

                // *** End programmer edit section *** (Продажа.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Продажа.Дата Set end)

                // *** End programmer edit section *** (Продажа.Дата Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Продажа.Сумма CustomAttributes)

        // *** End programmer edit section *** (Продажа.Сумма CustomAttributes)
        public virtual int Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Продажа.Сумма Get start)

                // *** End programmer edit section *** (Продажа.Сумма Get start)
                int result = this.fСумма;
                // *** Start programmer edit section *** (Продажа.Сумма Get end)

                // *** End programmer edit section *** (Продажа.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продажа.Сумма Set start)

                // *** End programmer edit section *** (Продажа.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Продажа.Сумма Set end)

                // *** End programmer edit section *** (Продажа.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Коммент.
        /// </summary>
        // *** Start programmer edit section *** (Продажа.Коммент CustomAttributes)

        // *** End programmer edit section *** (Продажа.Коммент CustomAttributes)
        [StrLen(255)]
        public virtual string Коммент
        {
            get
            {
                // *** Start programmer edit section *** (Продажа.Коммент Get start)

                // *** End programmer edit section *** (Продажа.Коммент Get start)
                string result = this.fКоммент;
                // *** Start programmer edit section *** (Продажа.Коммент Get end)

                // *** End programmer edit section *** (Продажа.Коммент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продажа.Коммент Set start)

                // *** End programmer edit section *** (Продажа.Коммент Set start)
                this.fКоммент = value;
                // *** Start programmer edit section *** (Продажа.Коммент Set end)

                // *** End programmer edit section *** (Продажа.Коммент Set end)
            }
        }
        
        /// <summary>
        /// Продажа.
        /// </summary>
        // *** Start programmer edit section *** (Продажа.Клиент CustomAttributes)

        // *** End programmer edit section *** (Продажа.Клиент CustomAttributes)
        [NotNull()]
        public virtual IIS.Tes.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Продажа.Клиент Get start)

                // *** End programmer edit section *** (Продажа.Клиент Get start)
                IIS.Tes.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Продажа.Клиент Get end)

                // *** End programmer edit section *** (Продажа.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продажа.Клиент Set start)

                // *** End programmer edit section *** (Продажа.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Продажа.Клиент Set end)

                // *** End programmer edit section *** (Продажа.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПродажаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПродажаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПродажаE", typeof(IIS.Tes.Продажа));
                }
            }
            
            /// <summary>
            /// "ПродажаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПродажаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПродажаL", typeof(IIS.Tes.Продажа));
                }
            }
        }
    }
}
