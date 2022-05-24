(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'https://lh3.googleusercontent.com/pw/AM-JKLW1aiNLI2F_TOuR6jFEdbrq5XYpab-ldTt1PWK3ZL8WXhR_t9rtCnbJeRE_Ynz3tebofoBfbsq7ZXDgiH9ti322ZPA6PAK4_VnCYyGrEyFjYEiPUfKeQavH9EmTQIJ1PnMnFEKpNQ2iJlQRNDMi9NyBzA=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLURCMpYYRYFb-KHhuLUmdeP1YWB6d68o2Y06_vVonFSdSm67CbLSL1AtY_aHS21EGGajNPhcPdE-cEFSlNL4jXpvh5NwxFgwE3XHhIK3g8l1A9lsMIwT3lcHSdAG0jtFDbdUUYtVZYnkmgQuba2sQ8Iiw=w752-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLWBJoTplP6F5tOdML1C4xILWHjoiUP6Wkt4JApqTTrRHFYeoX52mLP7-bXLdHaPZw9AerQGRxk01x64pAzMnsnSucoUOPi2p8I0ieEqqDuOrYpFfWJbaSsKAclpeha9pNDSSgCFi6OA14HBwYDcgXMLFQ=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLW38hOtocxqoKysGhpKVWyoYhmGc4wCGbS0KcY6c9_aztsjVclmM_IEUR1p24q4VMCAbMtH_qmoZgTo4P3HUL_O00w7w33pBzZ4Vwyp30Z0rNtLR93WrZ2X3B-GSjLiXT99ARVzqRWTm1lM0lFqIt6DPA=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLW-Sm6mxQZpFlVT43x71KnnBcorU98p61eN4wRfEyvuD6bDDSvnNJLliLjUaaejK06xeOBKiV4T93LKQw1uwUXIdC4C6eZpV7YRYIFzKGRtRezCVgqSNKPILTpyoOVPznrVcpY3dEwE_9uKHein4sIAyg=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLXfCiqSeeigkY-k9Bzti1ty4_-7eBKESaST4h47LjrTlv3BtfSqfJHKvAT29VId9ngVyG-5g9PONTDeeU0FZrKqBUQn8QYOPD-8QHlo8RoHTy0J9H6FVAkBH6GeYYbJNI5c40Wfu2DNc0TlMG24dB9OUA=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLVd9nSq-1fxgXyud8Gl94Fx_RxVsHm3fMWikQu4oUxIo_mFO114hEzUURicN0ij1y7E4e8GgXldYgwjoXIYatrTmqGTDXlWEHziPf2JtzwcQcDcHAAaz76xcB8t-I4NzGPJ-mdRDmLHz1W4mm5KqQ2kIQ=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLXGFGRtUd6lvgfBtZuWVYjUYYV9Crm8EKFCtHoshd3x_zQYxwLhpHLFHV-a_-nvYO8BUuN7Eh47Dgy053FiLTdcQ2WZmiYzqj0fhzg4V5F7OxienYucLocCa_Tj7dsklfPpUvI7avbNSljrkAMV6UbCNQ=w752-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLUMMePRogejKHE9game2nmmlsPoR0xt8jq4LGLApZfhlwwvuT-byTxoSlBkWwsk18uSMdfNbzNSL1unyLvT88VmzU38GhYFMN9wfbFUs0E5Qq0tqrKfb4jq-3CQ3E40obZLnQE95YXNFah0hBCznMG0RA=w1085-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLWzQKNwC6UiIIr2Fc7atptTpsZQ5EZf1GjceMWjpvyxCeJ9Yd4pbTkmuVLQN6pG3evg24mIbgHX7kUZbYkB4kWaq9GKPa8VMkb-YgnXVJV5VmZ-9Vmi-gPexKh3N6QMMVmBVkTr4j2ID7CYJzKJFA4t5Q=w752-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLUGEadXalg7yVOpBcQ6z-JXUy_f1dyG-hP1xuk-9fuv4aG6vbrUDrLsUhBv965wBk4j_Rq6LgGYLaG1MuN2QaN8ip-q7nJwNtS_t0BdJLgDE7jxde7-c_2Jp4zMjorfG3GtzDKpoc_cDW8YKCLtt161NQ=w752-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLU3EwSXIuHinKJJGMrJLC2cnlG8MsTDJer6ccXQcyaHSzq0fH80rt3TX2K5thDuLPZi3vaMe269-Sg1GuTnMDIcEMgZWurDcYEORVYwwMmsGosCnFZIlAuwa_eg2nCxCN34KpNq5-py_IIaaMnng0DbfA=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLWtayz5vkZodW_v9KbN__uegHrsHopNNaB7y7tjBCscgguiD2JRpT9fulpSkTD3BYQZQI_qFea0kb9KkQaGQbCixRtICvvJsjCgJwoKq6KzInD8-CGpPTSlen0HRGbKip8paQm_2paURZkfEI_mZU8MoA=w752-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLXXwIqddbMHHEOxngzGbMggleR5J-tyvTKY5MySO9oOQLtHw4jGVSzcMMU4HcRyxSVaiQiHcZ1-YYpw7V0-qhA07U1xajt990c8wXpYIWQJ8py0DHTA52_JGfBLn-hrDa4zDVNgIeqoMIF8D0HFvQlizg=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLWgdaKgHQ248dky9KYGKN1J4dWRtv8Iuj3pTrrzxildlirPyqcJLucW7kRi5AFfd2duz29523DEnLlHDGvKklVzbWiUTvZ0jBXPBn2dCqzbFd0gjqgesAvgE3MiWPhrm9JPTIEpGbh8nSY7PliH67o4dw=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLVVtIM7q4pqOM8_IgqJzTxHIj-ZV5ZgTIQna3vDi4Eo5fZ37unh1gw6rBUbw6t1QRYn-GrEm3DVWLDezUuOjIsR7a0R8SO0icQaEdRbmTFDzAdb4sUL3ol-L2MpVSt46SnlQtbem8m6lVPevhHt9p9cwQ=w1002-h1336-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLVEzcLz0mM-bdGhjoHVitnUa3Se7WxU2T1G_UiP5iNDvNp-HcGPQfdOzyS5Q2HjxHsiz-K0kZagfqY4VVgzeOGYsci-M1zBUQmETH48pufJAZf3KjqqzbJ3WnsnqGtkR2DVMjCCiy1gh2IfxrLsmH3-Rw=w1331-h999-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLUhv7MGdm_tgKnE8r0vMccuMysBAkgmLBjRnFy7VfH3D4r5sphP2AtCI9JsyIzNASYt1EaBBVZ3zLTJkgqtBH-C2WIgBBQJVQzOBi3epXiqw6kOb_uhcomxfv0dYLVKzitNRnV_FeH4uartvQnY-rlFSg=w426-h598-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLW3l4XqA7WjRK5V-VgkE6Fda5AYZ9B2KvTsZzmCRl1yi4PCfN4_VVjW3CJTv8nSy37Nwq6OrFLPqyxXJfLu1hFthGZEw94I19F_ZjrNHNCNfXnpl2piTCVYVHL6WfD_fxGqVhT0wVDwun0tasYyk31yJA=w450-h484-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLXjwdVexT4Im_6rhHjxgmEJY7Kv5Y-zza1h5DIlBDBZ03kfPodDHZT8rtN6j_SHDFjql_3bBQlHqsP_5dWYWDzPGvLOdxxlMMv6NpwZyfXEgfry1Txy6LY9s_34YmuXa1xEFGKOmUYzZeF5BUJRMFASMg=w731-h661-no?authuser=0',
			'https://lh3.googleusercontent.com/pw/AM-JKLXE0TuCQfOLoY0pKb0Mhm91H1HnBvJ6juXkzSbq3UkRxp0110bkFx5Nl8cPKveKWEtIaxisjJSa2bD7zWN8mmgm_UZyKAdmVo_BVJSSxzGMQGIlE2MB-SwHkUAeb5TcPo_Ii-cr35P6PczI-xocdLQ-hQ=w1242-h941-no?authuser=0',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 
