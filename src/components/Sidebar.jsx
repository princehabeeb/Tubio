import { Stack } from '@mui/material';
import { categories }from '../utils/constants';
// import { Category } from '@mui/icons-material';


const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack 
    direction='row'
     sx={{
      overflowY: 'auto',
      height: {sx: 'auto', md: '95%'},
      flexDirection: { md: 'column'}, 
  }}>
    {categories.map((category) => (
      <button
      className='category-btn'
      style={{
        background: category.name === selectedCategory && '#FC1503', color: 'white'
      }}
      key= {category.name}
      >
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
    </Stack>
  )
}

export default Sidebar