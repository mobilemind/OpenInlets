javascript:(()%3D%3E%7Bconst%20t%3Ddocument.location.href%2Ce%3Ddocument.location.pathname%2Cn%3Dwindow.getSelection()%2Co%3DRegExp('%2F'%2Bnavigator.language.toLowerCase()%2B'%2F'%2C'i')%3Bvar%20a%2Cl%2Ci%3D%2F(%5C%2Fguide%5C%2F%5B-a-z%5D%2B%5C%2F)(%5B-%5Cda-z%5D%2B)%5C%2F%2F%3Blet%20r%3Dnull%2Cp%3D''%2Cs%3D''%2Cd%3Dt%3Bif('support.apple.com'%3D%3D%3Ddocument.location.host)%7Bif(o.test(e))d%3Dt.replace(o%2C'%2F')%3Belse%20if(!%2F-%2F.test(e)%26%26i.test(e))%7Blet%20e%3Dt.indexOf('%2Ftoc%2F')%3B0%3Ce%3Fd%3Dt.substr(0%2Ce%2B5)%3A(e%3Dt.indexOf('%2Fwelcome%2F')%2C0%3Ce%26%26(d%3Dt.substr(0%2Ce%2B9)))%7Delse%7Bif(r%3De.match(i)%2Cnull!%3D%3Dr%26%261%3Cr.length)%7Blet%20e%3Dr%5B2%5D.split('-')%3Bd%3D'https%3A%2F%2Fsupport.apple.com'%2Br%5B1%5D%2Be.pop()%2B'%2F'%7D'None'!%3D%3Dn.type%26%260%3Cn.rangeCount%26%26((l%3Dn.getRangeAt(0))%26%26(a%3D3%3D%3D%3D(i%3Dl.startContainer).nodeType%3Fi.parentNode%3Ai).parentNode%26%26(p%3Da.parentNode.id%2Cs%3Da.innerText%2C''!%3D%3Ds%26%26''!%3D%3Dp%26%26(d%2B%3D'%23'%2Bp))%2Cn.removeAllRanges())%7Dt%3D%3D%3Dd%3Falert('Unable%20to%20simplify%20current%20URL-%5Cn'%2Bt)%3Aalert(%60Original%20URL-%5Cn%24%7Bt%7D%5Cn%5CnModified%20URL-%5Cn%24%7Bd%7D%24%7B''!%3Ds%26%26''!%3Dp%3F'%5Cn%5CnSelected%20Heading-%5Cn'%2Bs%3A''%7D%60)%7D%7D)()%3Bvoid'1.0.1'