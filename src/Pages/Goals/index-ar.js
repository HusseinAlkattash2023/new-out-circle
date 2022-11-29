import React from 'react'
import logo from '../../Assets/images/Group 360.svg';
import back from '../../Assets/images/back.png';
import {Link} from 'react-router-dom';
import goals from '../../Assets/images/goals.png';
import './index.css';
function GoalsAr() {
    return (
        <div className='goals'>
            <div className="logo_ar">
            <Link className='my-3' to="/ar">
                <img src={logo} alt=""/>
            </Link>
            </div>
            <div className='back_ar'>
                    <Link to="/ar" className='m-2'>
                        <span>رجوع</span>
                        <img src={back} alt=""/>
                    </Link>
            </div>
            <img className="background" src={goals} alt=""/>
            <div className="rectangle"></div>
            <section className='main'>
                <div>
                    <h2>أهدافنا و مميزاتنا</h2>
                </div>
                <div className='text_ar'>
                    <div>
                    <h3 style={{fontWeight:"bold"}}>:أهدافنا</h3>
                    <p>ترك الإطار التقليدي لأسلوب العمل مع الدائرة العامة والابتعاد عن الروتين المعتاد والتقليدي نحو أفق واسع بلا حدود-</p>
                    <p>.تطوير بيئة أي عمل بشكل عام من وضعه الحالي من خلال الأفكار والأسلوب المهني-</p>
                    <p>.تغيير مفهوم الإحباط المهني في ظل الظروف الصعبة وتحويله إلى نجاحات عملية دائمة في جميع الظروف-
                    </p>
                    <p>.تغيير مفهوم الاستغلال من خلال تقديم استشارات وخدمات حقيقي-</p>
                    <p>.تغيير مفهوم العمل الفردي إلى العمل الجماعي-</p>
                    <p>.تغيير مفهوم العمل العشوائي لعمل منظم ومدروس ودقيق وهادف-</p>
                    <p>.تغيير فرص العمل لمن يستحقها-</p>
                    </div>
                    <div>
                        <h3 style={{fontWeight:"bold"}}>:مميزاتنا</h3>
                        <p>.توفير الوقت والجهد للعملاء من خلال التواصل معنا بطرق سهلة في أي مكان وزمان-</p>
                        <p>.توفير الوقت والجهد وصعوبة التفكير في الأمور العامة والتافهة داخل العمل من خلال تقديم الاستشارات والخدمات وتنظيم ومتابعة العمل-</p>
                        <p>.تقديم خدمات متكاملة وشاملة تلبي معظم احتياجات العميل الشخصية والعملية في مكان واحد مما يوفر عناء تشتيت انتباه العملاء</p>
                        <p>. تطوير الأعمال وخلق أفكار جديدة تساهم في تحقيق الإيرادات في ظل جميع الظروف-</p>
                        <p>.أكثر ما يهمنا هو الحصول على نتائج مميزة في الواقع ، حيث أننا غير راضين عن تقديم الاستشارات والخدمات بشكل شفهي فقط-</p>
                        <p>.المتابعة الدؤوبة وتقديم خدمات ما بعد البيع-</p>
                        <p>.تسليط الضوء على الأشخاص ذوي الخبرة الذين تم تجاهلهم ومنحهم حقهم-</p>
                        <p>.تقسيم الخدمات الشخصية والإنسانية-</p>
                    </div>
                </div>
            </section>
        </div>
)
}

export default GoalsAr;