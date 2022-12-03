const ButtonSX = {
    overflow: 'hidden',
          elevation: 24, boxShadow: 5, backgroundColor: 'orange',  borderRadius: '3rem', mt: '35px', textTransform: 'uppercase', fontSize: '30px',
          fontStyle: 'italic',

          maxWidth: '700px', maxHeight: '100px',
          minWidth: '700px', minHeight: '100px',

          maxWidth: {md: '450px', sm: '400px', lg: '700px'}, 
          minWidth: {md: '450px', sm: '400px', lg: '700px'}, 

          '&:hover': {backgroundColor: 'black', pt: '10px', transform: 'scale(1.05)',
          willChange: 'transform', color:'white', border: '1px solid white'}, 
          transition: '.2s transform ease-in-out',
          willChange: 'transform',
          zIndex: 0, overflow: 'hidden',
          '&::after': {backgroundColor: 'yellow',
            borderRadius: '3rem',
            overflow: 'hidden',
            display: 'block',
            h: '100%',
            w: '100%',
            position: 'absolute',
            left: '0',
            top: '0',
            transform: 'translate(-100%, 0) rotate(10deg)',
            transformOrigin: 'top left',
            transition: '.2s transform ease-out',
            willChange: 'transform',
            zIndex: '-1'},
            '&:hover::after': {transform: 'translate(0, 0)', overflow: 'hidden',},
            '&:active': {backgroundColor: '#3e8e41',
  boxShadow: '0 5px #666',
  transform: 'translateY(4px)'},
   }

export default ButtonSX