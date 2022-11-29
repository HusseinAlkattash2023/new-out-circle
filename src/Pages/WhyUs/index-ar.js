import React from 'react'
import logo from '../../Assets/images/Group 360.svg'
import back from '../../Assets/images/back.png'
import {Link} from 'react-router-dom'
import whyus from '../../Assets/images/Group 384.png'
import './index.css'
function WhyusAr() {
    return (
        <div className='whyus'>
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
            <img className="background" src={whyus} alt=""/>
            <section className='main'>
                <div>
                    <h2>من نحن</h2>
                </div>
                <div className='text_ar'>
                    <p>...في ظل الظروف الطبيعية ، لا يعتبر النجاح نجاحًا حقيقيًا أو حتى مهارة<br/>
                    ...بينما اليأس في ظل الظروف الصعبة دليل على الإعاقة</p>
                    <p>...النجاح الحقيقي والمهارات والخبرة تظهر فقط في الأوقات الصعبة وفي الظروف الصعبة</p>
                    <p>النجاح الحقيقي هو العثور على شيء من لا شيء</p>
                    <p>.نحن فريق يقدم خدمات استشارية وتطويرية بالإضافة إلى الخدمات المهنية لجميع قطاعات الأعمال الخاصة في معظم محافظات سوريا بطريقة فنية غير عادية توفر الوقت والجهد على الجميع. كما أنه يعطي نتائج قيّمة وفعلية ، بالإضافة إلى التحديات في سوق العمل خارج المجتمع العام والروتين المعتاد</p>
                    <p>.لمعرفة المزيد من التفاصيل والاستفادة من خدماتنا ، يرجى تسجيل الدخول بشكل فردي حسب مجال العمل</p>
                    <strong>:ملاحظات مهمة جدا</strong>
                    <p>مجال عملنا الرئيسي هو الاستشارات مع إمكانية تطبيقها لتصبح خدمات مهنية حسب الاتفاقية-</p>
                    <p>،لا يجب بالضرورة تلبية الخدمات المهنية والشخصية التي نقدمها لأن خدماتنا تحتاج الى دراسة منظمة ودفيفة حتى يتم قبولها-</p>
                    <p>.لذا يرجى أن تمنحنا الوقت الكافي لتجنب اي مشكلة</p>
                    <p>.في حالة عدم التمكن من تلبية أي طلب ، سيتم تقديم اعتذار رسمي خلال فترة قصيرة-</p>
                </div>
            </section>
        </div>
)
}

export default WhyusAr;