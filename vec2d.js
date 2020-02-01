function vector(x,y){   
    
    this.x = x;                                 
    this.y = y;
    
    this.set = function(x,y) {                  
        this.x = x;                             
        this.y = y;
    };
    
    this.add = function(x, y) {      
        // if 'x' is a vector, then just use its properties to add 
        if (x instanceof vector) {     
            this.x += x.x;                    
            this.y += x.y;
            
            return this;
        }
        
        this.x += x;
        this.y += y;
        
        return this;
    };
    
    this.sub = function(x, y) {      
        // if 'x' is a vector, then just use its properties to subtract 
        if (x instanceof vector) {     
            this.x -= x.x;                    
            this.y -= x.y;
            
            return this;
        }
        
        this.x -= x;
        this.y -= y;
        
        return this;
    };
    
    this.copy = function(){
        return new vector(this.x,this.y);     
    }                                           
}

// miscellanious functions related to vectors 

function Vector(x,y){
    return new vector(x,y);
}

