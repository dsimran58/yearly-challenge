const supabase = require('../utils/create-client-connection');

const handler = async (event) => {
  const { page, size } = event.queryStringParameters;
  const { from, to } = getPagination(page, size);

  try {
    let { data: users, count, error } = await supabase
      .from('participants')
      .select('*,contests:contest_id(title,blog_id)',{count:'exact'})
      .neq('start_rank', 0)
      .order('performance', { ascending: false })
      .range(from, to)
    
    return {
      statusCode: 200,
      body: JSON.stringify({users:users,totalCount:count})
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const from = page ? (page-1) * limit : 0;
  const to = page ? parseInt(from) + parseInt(size-1) : size-1;

  return { from, to };
};

module.exports = { handler }