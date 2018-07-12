function Fact(){
    this.text = this.randomFact()[0];
    this.source = this.randomFact()[1];
}

Fact.prototype.collection = function () {
    var fact1 = ['At least 8 million tons of plastic enter the oceans each year.', 'ecowatch.com'];
    var fact2 = ['There is more microplastic in the ocean than there are stars in the Milky Way.', 'ecowatch'];
    var fact3 = ['322 million tons of plastic were produced in 2015—the same weight as 900 Empire State Buildings.', 'ecowatch.com'];
    var fact4 = ['More than 50 percent of sea turtles have consumed plastic.', 'ecowatch.com'];
    return [fact1, fact2, fact3, fact4];
}

Fact.prototype.randomFact = function () {
    var collection = this.collection();
    return collection[Math.floor(Math.random()*collection.length)];
}