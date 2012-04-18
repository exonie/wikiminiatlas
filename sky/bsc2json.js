var util=require('util'),
    stdin=process.stdin;

var starcol = {
  O5V: [155,176,255], O6V: [162,184,255], O7V: [157,177,255], O8V: [157,177,255], O9V: [154,178,255], 'O9.5V': [164,186,255],
  B0V: [156,178,255], 'B0.5V': [167,188,255], B1V: [160,182,255], B2V: [160,180,255], B3V: [165,185,255], B4V: [164,184,255], B5V: [170,191,255],
  B6V: [172,189,255], B7V: [173,191,255], B8V: [177,195,255], B9V: [181,198,255],
  A0V: [185,201,255], A1V: [181,199,255], A2V: [187,203,255], A3V: [191,207,255], A5V: [202,215,255], A6V: [199,212,255], A7V: [200,213,255],
  A8V: [213,222,255], A9V: [219,224,255],
  F0V: [224,229,255], F2V: [236,239,255], F4V: [224,226,255], F5V: [248,247,255], F6V: [244,241,255], F7V: [246,243,255], F8V: [255,247,252],
  F9V: [255,247,252],
  G0V: [255,248,252], G1V: [255,247,248], G2V: [255,245,242], G4V: [255,241,229], G5V: [255,244,234], G6V: [255,244,235], G7V: [255,244,235],
  G8V: [255,237,222], G9V: [255,239,221],
  K0V: [255,238,221], K1V: [255,224,188], K2V: [255,227,196], K3V: [255,222,195], K4V: [255,216,181], K5V: [255,210,161], K7V: [255,199,142],
  K8V: [255,209,174],
  M0V: [255,195,139], M1V: [255,204,142], M2V: [255,196,131], M3V: [255,206,129], M4V: [255,201,127], M5V: [255,204,111], M6V: [255,195,112],
  M8V: [255,198,109],
  B1IV: [157,180,255], B2IV: [159,179,255], B3IV: [166,188,255], B6IV: [175,194,255], B7IV: [170,189,255], B9IV: [180,197,255],
  A0IV: [179,197,255], A3IV: [190,205,255], A4IV: [195,210,255], A5IV: [212,220,255], A7IV: [192,207,255], A9IV: [224,227,255],
  F0IV: [218,224,255], F2IV: [227,230,255], F3IV: [227,230,255], F5IV: [241,239,255], F7IV: [240,239,255], F8IV: [255,252,253],
  G0IV: [255,248,245], G2IV: [255,244,242], G3IV: [255,238,226], G4IV: [255,245,238], G5IV: [255,235,213], G6IV: [255,242,234],
  G7IV: [255,231,205], G8IV: [255,233,211],
  K0IV: [255,225,189], K1IV: [255,216,171], K2IV: [255,229,202], K3IV: [255,219,167],
  O7III: [158,177,255], O8III: [157,178,255], O9III: [158,177,255], B0III: [158,177,255],
  B1III: [158,177,255], B2III: [159,180,255], B3III: [163,187,255], B5III: [168,189,255], B7III: [171,191,255], B9III: [178,195,255],
  A0III: [188,205,255], A3III: [189,203,255], A5III: [202,215,255], A6III: [209,219,255], A7III: [210,219,255], A8III: [209,219,255],
  A9III: [209,219,255],
  F0III: [213,222,255], F2III: [241,241,255], F4III: [241,240,255], F5III: [242,240,255], F6III: [241,240,255], F7III: [241,240,255],
  G0III: [255,242,233], G1III: [255,243,233], G2III: [255,243,233], G3III: [255,243,233], G4III: [255,243,233], G5III: [255,236,211],
  G6III: [255,236,215], G8III: [255,231,199], G9III: [255,231,196],
  K0III: [255,227,190], K1III: [255,223,181], K2III: [255,221,175], K3III: [255,216,167], K4III: [255,211,146], K5III: [255,204,138],
  K7III: [255,208,142],
  M0III: [255,203,132], M1III: [255,200,121], M2III: [255,198,118], M3III: [255,200,119], M4III: [255,206,127], M5III: [255,197,124],
  M6III: [255,178,121], M7III: [255,165,097], M8III: [255,167,097], M9III: [255,233,154],
  B2II: [165,192,255], B5II: [175,195,255],
  F0II: [203,217,255], F2II: [229,233,255],
  G5II: [255,235,203],
  M3II: [255,201,119],
  O9I: [164,185,255],
  B0I: [161,189,255], B1I: [168,193,255], B2I: [177,196,255], B3I: [175,194,255], B4I: [187,203,255], B5I: [179,202,255], B6I: [191,207,255],
  B7I: [195,209,255], B8I: [182,206,255], B9I: [204,216,255],
  A0I: [187,206,255], A1I: [214,223,255], A2I: [199,214,255], A5I: [223,229,255],
  F0I: [202,215,255], F2I: [244,243,255], F5I: [219,225,255], F8I: [255,252,247],
  G0I: [255,239,219], G2I: [255,236,205], G3I: [255,231,203], G5I: [255,230,183], G8I: [255,220,167],
  K0I: [255,221,181], K1I: [255,220,177], K2I: [255,211,135], K3I: [255,204,128], K4I: [255,201,118], K5I: [255,209,154],
  M0I: [255,204,143], M1I: [255,202,138], M2I: [255,193,104], M3I: [255,192,118], M4I: [255,185,104],
  N: [255,157,000]
};

// bcs format
function parseStar(line) {
  var i, s = {},
      format = [
        [76,77,'RAh'],      //  Hours RA, equinox J2000, epoch 2000.0 (1)
        [78,79,'RAm'],      //  Minutes RA, equinox J2000, epoch 2000.0 (1)
        [80,83,'RAs'],      //  Seconds RA, equinox J2000, epoch 2000.0 (1)
        [84,84,'DEx'],      //  Sign Dec, equinox J2000, epoch 2000.0 (1)
        [85,86,'DEd'],      //  Degrees Dec, equinox J2000, epoch 2000.0 (1)
        [87,88,'DEm'],      //  Minutes Dec, equinox J2000, epoch 2000.0 (1)
        [89,90,'DEs'],      //  Seconds Dec, equinox J2000, epoch 2000.0 (1)
        [91,96,'GLON'],     //  Galactic longitude (1)
        [97,102,'GLAT'],    //  Galactic latitude (1)
        [103,107,'Vmag'],   //  Visual magnitude (1)
        [108,108,'n_Vmag'], //  Visual magnitude code
        [110,114,'BmV'],    //  B-V color in the UBV system
        [116,120,'UmB'],    //  U-B color in the UBV system
        [122,126,'RmI'],    //  R-I   in system specified by n_R-I
        [127,127,'nRI'],    //  Code for R-I system (Cousin, Eggen)
        [128,147,'SpType']  //  Spectral type
      ];
  for( i=0; i<format.length; ++i ) {
    s[format[i][2]] = line.substr( format[i][0]-1, format[i][1]-format[i][0]+1 );
  }
  return s;
}

function processStar(s) {
  var p = { ra: 0, de: 0, mag: 0, c: '255,255,255' }, t;
  p.mag = parseFloat(s.Vmag);
  p.ra = ( ( parseFloat(s.RAh) + ( parseFloat(s.RAm) + parseFloat(s.RAs)/60.0 )/60.0 )/24.0 ) * 2.0*Math.PI;
  p.de = ( ( parseFloat(s.DEd) + ( parseFloat(s.DEm) + parseFloat(s.DEs)/60.0 )/60.0 )/360.0 ) * 2.0*Math.PI * (s.DEx=='-'?-1:1); 
  if( /^([OBAFGKMN])([0-9]+\.?[0-9]*)([I]*[V]*)/.exec(s.SpType.substr(2)) ) {
    t = RegExp.$1+RegExp.$2+RegExp.$3;
    if( t in starcol ) {
      p.c = starcol[t].join(',');
    }
  }
  return p;
}

// handle input from stdin
stdin.resume(); // see http://nodejs.org/docs/v0.4.7/api/process.html#process.stdin
//stdin.setEncoding('utf8');

var alltext = '';

stdin.on('data',function(chunk){ // called on each line of input
  alltext += chunk.toString(); 
});

stdin.on('end',function(){ // called when stdin closes (via ^D)
  var s,i,l = alltext.split('\n'),p=[], q, t;
  for( i=0; i<l.length; ++i ) {
    s = parseStar(l[i]);

    q = processStar(s);
    if( q.mag || q.mag===0 ) {
      p.push( q );
    }
  }
  p.sort( function(a,b) { return a.mag-b.mag; } );
  console.log(JSON.stringify(p));
});

