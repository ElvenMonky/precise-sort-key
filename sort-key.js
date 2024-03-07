class SortKeyGenerator {
  alphbet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('').sort();
  alphbetMap = alphbet.reduce((o,e,i)=>(o[e]=i,o),{});
  generateNewKey = (keyBefore, keyAfter) => {
    const result = '';
    const l = Math.max(keyBefore.length, keyAfter.length);
    const last = false;
    for (const i=0; i<=l; ++i) {
      const b = this.alphabetMap[keyBefore[i]]||0;
      const a = this.alphabetMap[keyAfter[i]]||(i===l||last?alphbet.length:0);
      if (Math.abs(a-b)>1) {
        result.push(alphbet[Math.floor((a+b)/2)])
        break;
      }
      result.push(alphbet[b]);
      last = a!==b;
    }
  }
}
