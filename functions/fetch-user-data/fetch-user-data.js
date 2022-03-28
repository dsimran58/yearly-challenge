const supabase = require('../utils/create-client-connection');

const handler = async (event) => {
  try {
    let { data: users, error } = await supabase
      .from('participants')
      .select('*,contests:contest_id(title,blog_id)')
      .neq('start_rank',0)
      .order('performance', { ascending: false })

    return {
      statusCode: 200,
      body: JSON.stringify(users)
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }