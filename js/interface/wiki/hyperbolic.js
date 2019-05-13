/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['hyperbolic']=Kx(


	
detail('双曲函数 Hyperbolic',Table([ZLR('函数 定义域 值域 奇偶 单调 凹凸')],[
	
	ZLR('\\sh x = '+frac('e^x - e^{-x}',2,'')+'____ℝ____ℝ____奇____↗____','','____'),
	ZLR('\\ch x = '+frac('e^x + e^{-x}',2,'')+'____ℝ____[1,+∞)____偶____'+piece([['↗','[0,+∞)'],['↘','(-∞,0]']])+'____','','____'),
	ZLR('\\th x = '+frac('\\sh x','\\ch x','')+'____ℝ____(-1, 1)____奇____↗____','','____'),
	ZLR('\\cth x = '+frac('\\ch x','\\sh x','')+'____ℝ-\\{0\\}____ℝ-[-1,1]____奇____↘∪'+'','','____'),
	ZLR(kxf('sech')+'~ x = '+frac(1,'\\ch x','')+'____ℝ____(0,1]____偶____'+piece([['↗','(-∞,0]'],['↘','[0,+∞)']])+'____','','____'),
	ZLR(kxf('csch')+'~ x = '+frac(1,'\\sh x','')+'____ℝ-{0}____ℝ-\\{0\\}____奇____↘∪____','','____')


],'wiki').replace(/\n/g,br))+
	
detail('反双曲函数 Inverse Hyperbolic',Table([ZLR('函数 定义域 值域 奇偶 单调 凹凸')],[
	
	ZLR('\\sh^{-1}x = \\ln (x + '+kroot('x^2+1')+')____ℝ____ℝ____奇____↗____','','____'),
	ZLR('\\ch^{-1}x = \\ln (x + '+kroot('x^2-1')+')____[1,+∞)____[0,+∞)____-____↗____','','____'),
	ZLR('\\th^{-1}x = '+frac(1,2,'')+'\\ln '+frac('1+x','1-x','')+'____(-1, 1)____ℝ____奇____↗____','','____'),
	ZLR('\\cth^{-1}x = '+frac(1,2,'')+'\\ln '+frac('1+x','x-1','')+'____ℝ-[-1,1]____ℝ-\\{0\\}____奇____↘∪____','','____'),
	ZLR(kxf('sech')+'^{-1}x = \\ln (1+'+kroot('1-x^2')+') - \\ln x____(0,1]____ℝ____-____↗____','','____'),
	ZLR(kxf('csch')+'^{-1}x = \\ln (1+'+kroot('1+x^2')+') - \\ln x____ℝ-\\{0\\}____ℝ-\\{0\\}____奇____↘∪____','','____')


],'wiki').replace(/\n/g,br))
	
);