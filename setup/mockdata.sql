insert into users(full_name , password , gmail) values
('Abbosxon Oripov', 'abbosxon' , 'abbosxonoripov3@gmail.com');

-- fan
insert into fanlar(fan_name) values 
('Matematika'),
('Ingliz Tili'),
('Fizika');


--institut
insert into institut(institut_name) values
('TATU'),
('YODJU'),
('Axborot Instituti'),
('O''zbekiston milliy universiteti')
returning *;

--faculty
insert into faculty(fac_name , institut_id, block1 , block2 , grands , grand_score , contracts , contract_score) values
('Matematika' ,4, 1 , 3 , 50 , 140 , 62 , 128),
('Kompyuter Lingvistikasi' , 1 ,1, 2 , 50 , 140 , 62 , 128)
returning *;

--tests
insert into tests(question , variants , answer, fan_id , score) values
('Quyidagi yig''indining ohirgi raqamini toping: 1!+2!+3!+…+25!', '{"3", "4", "5", "6"}', '3', 1 , 3.1),
('x^3-36(x)^2-36x+63 ifodaning x=37 nuqtadagi qiymatini toping.', '{"0", "2768", "100", "63"}', '100', 1 , 3.1),
('|x-3| + |x+4| = 5 tenglama haqidagi mulohazalardan qaysi biri to''g''ri.', '{"Faqat bitta ildizi bor", "Ildizlari turli ishorali", "ildizi yo''q", "Har ikkala ildizi manfiy"}', 'ildizi yo''q', 1, 3.1), 
('AOB markaziy burchak AB yoyga tiralgan ichki chizilgan burchagidan 30° ga ortiq. Ichki chizilgan burchak nimaga teng.', '{"30°", "40°", "20°", "50°"}', '30°', 1, 3.1),
('Qaysi son katta. A=1*2*3...*20  mi B=1+2+3+…+1000000 mi', '{"A=B", "A>B", "A<B", "A^2=B"}', 'A>B', 1, 3.1),
('Tenglamani yeching: 8(x+2)-6=7-(5-8x)', '{"-2", "0.5", "1.6", "ildizga ega emas"}', 'ildizga ega emas', 1, 3.1),
('Ifodaning son qiymatini toping: S=2(ab+ac+bc) bunda:a=5,  b=6.4,  c=4.5', '{"50.45", "83.3", "166.6", "109"}', '166.6', 1, 3.1),
('Teng yonli uchburchakning perimetri 48, yon tomoni 18 ga teng.Uning asosini toping?', '{"15", "12", "16", "18"}', '12', 1, 3.1),
('Tenglamani eching: 1+7+13+19+…+X=280', '{"55", "33", "44", "66"}', '55', 1, 3.1),
('Agar a+b+c=0 bo''lsa, a^3+b^3+c^3 ni qiymatini toping', '{"3abc", "3(a^2)bc", "3a(b^2)c", "3ab(c^2)"}', '3abc', 1, 3.1),
('2^99+2^9 yigindini 100 ga bo''lgandagi qoldiqni toping.', '{"13", "6", "11", "0"}', '0', 1, 3.1),
('Hisoblang: 1-2+3-4+…+1993-1994+', '{"1995", "2889", "2990", "998"}', '998', 1, 3.1),
('Teng yonli uchburchakning ikki tomoni 8 va 3 ga teng.Uning uchinchi tomonini toping?', '{"5", "8", "11", "9"}', '8', 1, 3.1),
('Tomonlari 3m, 4m va 5m bo''lgan uchburchakka tashqi chizilgan aylananing radiusi necha metr?', '{"12.5", "2.3", "2.5", "3"}', '2.5', 1, 3.1),
('x^2-y^2', '{"x-y+x*y", "(x-y)(x+y)", "x^2-(x+y)", "(x+y)(x*y)"}', '(x-y)(x+y)', 1 , 3.1),
('(x+2)^2', '{"x^2+4x+4", "x^4+2x+4", "x^2-2x+4", "4x^2-2x"}', 'x^2+4x+4', 1 , 3.1),
('|2.5x|*4 = 10', '{"2.6", "3", "-2.4", "2.4"}', '2.4', 1 , 3.1),
('2006*2009-2007*2008', '{"2", "24", "-2", "48"}', '-2', 1 , 3.1),
('5*3(2+x)-2 = 88', '{"4", "6", "-1", "3"}', '4', 1 , 3.1),
('oxirgi raqamini toping: 27^4 ?', '{"9", "3", "7", "1"}', '1', 1 , 3.1)


--result

insert into result(user_id , institut_id , fac_id , block1_score , block2_score, result_type) values
(1, 4 , 1 , )