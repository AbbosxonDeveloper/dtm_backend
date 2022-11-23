const FINDFAC = `
    select * from faculty
    where block1 = $1 and block2 = $2
`

const GETFAC = `
select
        f.*,
        json_agg(u.*) as institut
    from faculty as f
    left join institut as u on u.institut_id = f.institut_id
    where  case
                                    when $1 > 0 then f.fac_id = $1
                                    else true
                                    end and
            case when $2>0 then f.block1 =$2 else true end and
            case when $3>0 then f.block2 =$3 else true end
    group by f.fac_id
    order by f.fac_id
`

export {
    FINDFAC,
    GETFAC
}