const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   
    autoplay: true,  
    audio: [
	 {
		name: '红色高跟鞋',
		artist: '红色高跟鞋',
		url: 'http://music.163.com/song/media/outer/url?id=303963502.mp3',
		cover: 'http://p2.music.126.net/IZ5hcrme7k-xNG4gzw-NPg==/109951164627195322.jpg?',
	    lrc: 'images/.lrc' 
	 },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: 'http://p1.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?',
      },
    ]
});