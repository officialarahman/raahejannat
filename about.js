const paragraph = document.getElementById("paragraph");
const button = document.getElementById("translate-btn");

let isTranslated = false;

button.addEventListener("click", () => {
  if (!isTranslated) {
    paragraph.textContent = "راہِ جنت ایسوسی ایشن کامٹی کا تعارف <br> راہِ جنت ایسوسی ایشن کامٹی ایک سماجی و تعلیمی تنظیم ہے جو نوجوانوں کی فکری، اخلاقی اور معاشرتی ترقی کے لیے سرگرمِ عمل ہے۔ ہماری تنظیم کا مقصد علم، شعور، اتحاد اور قیادت کو فروغ دینا ہے تاکہ ایک باوقار اور باشعور معاشرہ تشکیل دیا جا سکے۔ <br> ہم یقین رکھتے ہیں کہ تعلیم اور مثبت مکالمہ ہی وہ طاقتور ذریعہ ہے جس سے فرد اور قوم کی تقدیر بدلی جا سکتی ہے۔ اسی مقصد کے تحت ہم نے اب تک کئی بامقصد اور کامیاب پروگرام منعقد کیے ہیں جیسے: <br> مضمون نویسی کا مقابلہ، کوئز مقابلہ، کانفرنس برائے محمد علی جوہر، اور عوامی اجتماع برائے استقبالِ رمضان۔ <br> یہ تمام سرگرمیاں ہماری تنظیم کی علمی، فکری اور روحانی اقدار کی عکاسی کرتی ہیں۔ <br> راہِ جنت ایسوسی ایشن نوجوانوں میں اعتماد، قیادت، اور شعور بیدار کرنے کے ساتھ ساتھ ایک مثالی سماج کے قیام کی کوشش کر رہی ہے۔ ہمارا عزم ہے کہ ہم تعلیم، انصاف اور بیداری کے ذریعے ایک مضبوط اور متحد قوم کی تعمیر کریں۔ <br> راہِ جنت ایسوسی ایشن کامٹی — رہنمائی کی راہ، کامیابی کا سفر"; // Translated text
    button.textContent = "Show Original";
    isTranslated = true;
  } else {
    paragraph.textContent = "Raahe Jannat Association Kamptee is a socio-educational and community-centric organization committed to the intellectual, moral, and cultural upliftment of society, especially the youth. Established in 2021 with a vision to empower individuals through education, awareness, and unity, our association actively works at the grassroots level to promote knowledge, leadership, and social responsibility. <br><br> We strongly believe in the transformative power of education and community dialogue. Over the years, we have successfully organized impactful events such as Quiz Contests, a scholarly Conference on Hazrat Maolana Mohammad Ali Jauhar, Essay Competitions, and a spiritually enriching Public Meeting on Welcoming Ramadhan. Each initiative reflects our dedication to nurturing young minds, preserving cultural heritage, and encouraging thoughtful civic engagement. <br><br> Recently we have also paid a visit to Tehsil Office Kamptee to condemn the terrorist attack occured in Pahalgham responsible the terrorist group <i>The Registent Front</i> of Pakistan. <br><br> Our activities are designed to inspire confidence, leadership, and social awareness among students and citizens. As we continue to grow, we remain committed to creating meaningful platforms that promote justice, education, and empowerment for all. <br><br> Raahe Jannat Association Kamptee – Guiding the Youth, Empowering the Community."; // Original text
    button.textContent = "Translate";
    isTranslated = false;
  }
});
