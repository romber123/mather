/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Inequalities/Algebraic']=
detail(ksc('a+b, ab, a^n+b^n'),
	brA([


		detail('正整数',


			ksc([

				

			])+br+'当a>b≥1时，即a-b≥1，也即a≥b+1≥2，则a-1≥1'+br+
			ksc([

				'0 < a-b ≤ (a-b)^2,a+b ≤ a^2-b^2,1+2ab,2a+b^2 ≤ a^2+b^2 < (a+b)^2,2a^2',

				'b ≤ b^2 < 2b^2 < a^2+b^2 ',

				'2√{ab}ab=2(ab)^{3\\/2} < (a+b)ab < a^3+b^3',

				

			])

		
		),

		detail('正数',
			ksc([

				'a+b≥2√{ab}',
				'(a+b)^2≥4ab',
				'(a+b)^3≥8√{ab}ab=(4ab)^{3\\/2}',
				'(a+b)^4≥2^4(ab)^2',

				'(a+b)^n≥2^n(ab)^{n\\/2}',

				'a^2+b^2≥2ab',
				'a^3+b^3=(a+b)(a^2+b^2-ab)≥(a+b)ab≥2√{ab}ab=2(ab)^{3\\/2}',
				'a^4+b^4≥2a^2b^2=2(ab)^2',
				'a^5+b^5=(a+b)(a^4-ba^3+b^2a^2-b^3a+b^4)=(a+b)((a^2+b^2)^2-ab(a^2+b^2+ab))=(a+b)((a^2+b^2-ab/2)^2-5(ab)^2/4)≥2(ab)^{1\\/2}(ab)^2=2(ab)^{5\\/2}',

				'a^n+b^n≥2(ab)^{n\\/2}',
				

			])+br+'a≥b时'+br+
			ksc([

				'0≤a-b',

				'(a-b)^2≤a^2+b^2≤(a+b)^2',
				'(a-b)^3≥8√{ab}ab=(4ab)^{3\\/2}',
				'(a-b)^4≥2^4(ab)^2',

				'(a-b)^n≥2^n(ab)^{n\\/2}',

				'a^2-b^2≥2ab（当且仅当a≥(√2+1)b时）',
				'a^3-b^3=(a+b)(a^2+b^2-ab)≥(a+b)ab≥2√{ab}ab=2(ab)^{3\\/2}',
				'a^4-b^4≥2a^2b^2=2(ab)^2',
				'a^5-b^5=(a+b)(a^4-ba^3+b^2a^2-b^3a+b^4)=(a+b)((a^2+b^2)^2-ab(a^2+b^2+ab))≥2(ab)^{5\\/2}',

				'a^n-b^n≥2(ab)^{n\\/2}',
				

			])

		
		),



		detail('实数域',
		ksc([
			'a^2+b^2≥2|ab|（二项不等式）',


			'(1+x)^n≥1+nx（伯努利不等式，n是自然数，x>-1）',
	
			'当a,b>0时（下列公式可推广至3+个数）',
			'【均值不等式】',
			'\\frac{2}{1\\/a+1\\/b}≤\\sqrt{ab}≤\\frac{a+b}2≤\\sqrt{\\frac{a^2+b^2}2}',
			'调和平均值≤几何平均值≤算术平均值≤二次平均值',

			'【加权均值不等式】',
			prod('k',1,'n','x_k^{λ_k}',0,'')+'≤'+sum('k',1,'n','λ_kx_k',0,''),
			'其中x_k>0，且'+sum('k',1,'n',kfrac([1,'λ_k']),0,'')+'=1',

			'（另一种写法）',
			prod('k',1,'n','x_k^{p_k}',0,'')+'≤'+zp(kfrac([sum('k',1,'n','p_kx_k',0,''),sum('k',1,'n','p_k',0,'')]),'()')+'^{'+sum('k',1,'n','p_k',0,'')+'}',
			'仅当x_k相等时取等号',

			'【范数不等式】',


			zp(kfrac([1,'n'])+sum('k',1,'n','x_k^r',0,''),'()')+'^{1\\/r}≤'+
				zp(prod('k',1,'n','x_k',0,''),'()')+'^{1\\/n}≤'+
				zp(kfrac([1,'n'])+sum('k',1,'n','x_k^p',0,''),'()')+'^{1\\/p}',
			'其中r< 0 < p',

			'也即'+kfrac([zp('x','‖‖')+'_r','n^{1\\/r}'])+'≤'+
				zp(prod('k',1,'n','x_k',0,''),'()')+'^{1\\/n}≤'+
				kfrac([zp('x','‖‖')+'_p','n^{1\\/p}']),

			

		]).join(br+br)),


		detail('复数域',
	
		ksc([
			'【三角不等式】',
			'||a|-|b||≤|a±b|≤|a|+|b|',
	

			'【杨氏不等式】',
			'|ab|≤\\frac{|a|^p}p+\\frac{|b|^q}q',
			'其中p,q>1，且1\\/p+1\\/q=1',
	
			'【一般的杨氏不等式】',
			zp(prod('k',1,'n','x_k',0,''),'||')+'≤'+sum('k',1,'n',kfrac(['|x_k|^{p_k}','p_k']),0,''),
			'其中p_k>1，且'+sum('k',1,'n',kfrac([1,'p_k']),0,'')+'=1',
	


			'定义向量x的p范数：',
			zp('x','‖‖')+'_p='+zp(sum('k',1,'n','|x_k|^p',0,''),'()')+'^{1/p}',
			zp('x','‖‖')+'_∞='+sum('','1≤k≤n','','|x_k|',5,''),

			'【施瓦兹不等式】',
			zp(sum('k',1,'n','|x_ky_k|',0,''),'||')+'≤'+kroot(sum('k',1,'n','|x_k|^2',0,''))+kroot(sum('k',1,'n','|y_k|^2',0,'')),
			'即'+zp(sum('k',1,'n','|x_ky_k|',0,''),'()')+'≤'+zp('x','‖‖')+'_2'+zp('y','‖‖')+'_2',
			
			'【柯西不等式】',

			zp(sum('k',1,'n','x_ky_k',0,''),'()')+'^2≤'+zp(sum('k',1,'n','x_k^2',0,''),'()')+zp(sum('k',1,'n','y_k^2',0,''),'()'),
			'',

			'【赫尔德不等式】',
			zp(sum('k',1,'n','|x_ky_k|',0,''),'||')+'≤'+zp(sum('k',1,'n','|x_k|^p',0,''),'()')+'^{1/p}'+zp(sum('k',1,'n','|y_k|^p',0,''),'()')+'^{1/p}',
			'其中p,q>1，且1\\/p+1\\/q=1',

			'即'+zp(sum('k',1,'n','|x_ky_k|',0,''),'()')+'≤'+zp('x','‖‖')+'_p'+zp('y','‖‖')+'_p',

			'【闵科夫斯基不等式】',
			zp(sum('k',1,'n','|x_k+y_k|^p',0,''),'()')+'^{1/p}≤'+zp(sum('k',1,'n','|x_k|^p',0,''),'()')+'^{1/p}+'+zp(sum('k',1,'n','|y_k|^p',0,''),'()')+'^{1/p}',
			'其中1≤p≤∞',

			'即'+zp('x+y','‖‖')+'_p≤'+zp('x','‖‖')+'_p+'+zp('y','‖‖')+'_p',

			'【詹森不等式\\text{Jensen}】',
			zp(sum('k',1,'n','|x_k|^p',0,''),'()')+'^{1/p}≤'+zp(sum('k',1,'n','|x_k|^r',0,''),'()')+'^{1/r}',
			'其中0< r < p≤∞',

			'即'+zp('x','‖‖')+'_p≤'+zp('y','‖‖')+'_r',

		]).join(br+br)
		)


		
	])+

	refer([
		'《数学数学》高等教育出版社P.21',
		'《数学指南-实用数学手册[德]》科学出版社P.35',
		'《实用数学手册》科学出版社P.8',
		enwiki('Beal_conjecture','2020-8-11'),
		
		inhref('explore.html?q=Problem/Problem List'),
		inhref('wiki.html?q=Formula/Sequence/Sum'),
	])
);


