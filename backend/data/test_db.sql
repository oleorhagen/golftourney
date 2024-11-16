--
--- Start doing some simple testing of the DB
--

-- a select statement that catenates the test name and the case statement
select
    concat(
        -- the test name
        'For every (year, month) there is one and only one (absolute_month): ',
        -- the case statement
        case
            when
                -- one or more subqueries
                -- in this case, an expected value and an actual value
                -- that must be equal for the test to pass
                (select count(distinct year, month) from month_value)
                -- expected value,
                = (select count(distinct absolute_month) from cm_absolute_month)
            -- actual value
            -- the then and else branches of the case statement
            then 'passed'
            else 'failed'
        end
    -- close the concat function and terminate the query
    )
;

