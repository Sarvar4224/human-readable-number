module.exports = function toReadable (number) {
  let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      arr2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
      arr3 = ['ten', 'twenty', 'thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      if(number==0)
      return "zero"
      if (number<100 && number%10==0)
      return arr3[number/10-1];
      if (number<10)
      return arr1[number-1];
      if(number>10 && number<20)
      return arr2[number%10-1];
      if(number>=100 && number%100==0)
      return arr1[number/100-1] + ' hundred'
      if(number>20 && number <100)
      {
        let remain=number%10;
        number=Math.floor(number/10);
        return arr3[number-1] + " " + arr1[remain-1]
      }
      if (number>100)
      {
        let q=number%10;
        number = Math.floor(number/10);
        let r=number%10;
        number = Math.floor(number/10);
        if (q==0)
        {
            return arr1[number-1] + " hundred " + arr3[r-1]
        }
        else if(r==0)
        {
            return arr1[number-1] + " hundred " + arr1[q-1]
        }
        else if(r==1)
        {
            return arr1[number-1] + " hundred " + arr2[q-1]
        }
        else 
        return arr1[number-1]+ " hundred " + arr3[r-1] + " " + arr1[q-1]
      }
}
